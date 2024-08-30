import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { PlantService } from '../services/plant.service';

@Injectable({
  providedIn: 'root',
})
export class authCreatorGuard {
  rol = '';

  constructor(public router: Router, public aRoute: ActivatedRoute, public plantService : PlantService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    const token = localStorage.getItem('jwt');
    

    if(token == null){
      this.router.navigate(['/login']);
    }

    return true;
  }
}