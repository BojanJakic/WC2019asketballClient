import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../../services/player/player.service';
import { Player } from '../../../models/interfaces/player';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-players-overview',
  templateUrl: './players-overview.component.html',
  styleUrls: ['./players-overview.component.css']
})
export class PlayersOverviewComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) { }

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

  deletePlayer(playerId: number) {
    this.playerService.delete(playerId).subscribe(response => {
       this.players = this.players.filter(player => {
         return player.id !== playerId
       })
    }, error => {
      console.log(error)
    })
  }
}
