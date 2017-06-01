import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = 'deb1cb2cd2350c6352d2';
	private client_secret = 'c364f1aa4fd1ad9e6bfea7b405af846c63941a18';

	constructor(private _http: Http){
		console.log('Github Service Ready...');
		this.username = 'shucknjiveturkey';
	}

	getUser(){
		return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret='+this.client_secret)
		.map(res => res.json());
	}

	updateUser(username:string){
		this.username = username;
	}
}