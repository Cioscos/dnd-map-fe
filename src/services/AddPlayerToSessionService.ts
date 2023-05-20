import {Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators";
import Player from "../types/Player";
import {indirizziFetch} from "../routes";

const AddPlayerToSessionService = (sessionName: string, body: any): Observable<Player> => {

    return ajax.post<Player>(indirizziFetch.addPlayerToSession+sessionName+"/players", body, {'ngrok-skip-browser-warning': 'big penis'}).pipe(
        map((res) => {
            return res.response;
        })
    );
};

export default AddPlayerToSessionService;