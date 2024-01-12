import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { account } from 'src/lib/appwrite';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  => {

  const router = new Router()
  const rota: any = state

  let userStorage: string|null = localStorage.getItem('userId')
  let localExist: boolean = !!localStorage.getItem('cookieFallback')

  return localExist && userStorage == rota[1].path ? true : false
};
