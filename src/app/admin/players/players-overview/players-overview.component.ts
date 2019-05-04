import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../services/player/player.service';
import { Player } from '../../../models/interfaces/player';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalComponent } from '../../../shared/modal/modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-players-overview',
  templateUrl: './players-overview.component.html',
  styleUrls: ['./players-overview.component.css']
})
export class PlayersOverviewComponent implements OnInit {

  players: Player[] = [];
  modalRef: NgbModalRef;

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
    }, error => {
      console.log(error)
    })
  }

  openModal(player: Player) {
    this.modalRef = this.modalService.open(ModalComponent)
    this.modalRef.componentInstance.type = 'confirmation';
    this.modalRef.componentInstance.message = `Are you sure you want to delete ${player.firstName} ${player.lastName}?`;
    this.modalRef.componentInstance.actionButtonText = 'Delete';
    this.modalRef.componentInstance.isConfirmed.subscribe(isConfirmed => {
      if(isConfirmed) {
        this.deletePlayer(player);
      }
    })
  }
}
