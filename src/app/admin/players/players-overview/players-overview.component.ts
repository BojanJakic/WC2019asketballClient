import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../services/player/player.service';
import { Player } from '../../../models/interfaces/player';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalData } from '../../../models/interfaces/modal-data';

@Component({
  selector: 'app-players-overview',
  templateUrl: './players-overview.component.html',
  styleUrls: ['./players-overview.component.css']
})
export class PlayersOverviewComponent implements OnInit {

  players: Player[] = [];
  modalRef: NgbModalRef;
  modalData: ModalData = {
    type: '',
    message: '',
    actionButtonText: ''
  };

  constructor(private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.getAll().subscribe((response: Player[]) => {
      this.players = response;
    }, error => {
      console.log(error)
    })
  }

  editPlayer(player: Player) {
    this.router.navigate(['../new-player', { playerId: player.id }], { relativeTo: this.route });
  }

  deletePlayer(player: Player) {
    this.playerService.delete(player.id).subscribe(response => {
      this.players = this.players.filter(current => {
        return current.id !== player.id
      })

      this.getSuccessModalData(player);
    }, error => {
      this.getErrorModalData(player);
    })
  }

  openModal(player?: Player) {
    this.modalRef = this.modalService.open(ModalComponent)
    this.modalRef.componentInstance.type = this.modalData.type;
    this.modalRef.componentInstance.message = this.modalData.message;
    this.modalRef.componentInstance.actionButtonText = this.modalData.actionButtonText
    this.modalRef.componentInstance.isConfirmed.subscribe(isConfirmed => {
      if (isConfirmed) {
        this.deletePlayer(player);
      }
    })
  }

  getSuccessModalData(player: Player) {
    this.modalData.type = 'success';
    this.modalData.message = `Player ${player.firstName} ${player.lastName} deleted successfuly!`
    this.openModal();
  }

  getErrorModalData(player: Player) {
    this.modalData.type = 'error';
    this.modalData.message = `Player ${player.firstName} ${player.lastName} not deleted!`;
    this.openModal();
  }

  getConfirmationModalData(player: Player) {
    this.modalData.type = 'info';
    this.modalData.message = `<div>Are you sure you want to delete ${player.firstName} ${player.lastName}?</div><div>Deleted player can not be reverted</div>`;
    this.modalData.actionButtonText = 'Delete';
    this.openModal(player);
  }
}
