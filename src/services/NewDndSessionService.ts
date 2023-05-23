import {Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators";
import DndSession from "../types/DndSession";
import {indirizziFetch} from "../routes";

const NewDndSessionService = (sessionName: string, size: string): Observable<DndSession> => {

    return ajax.get<DndSession>(indirizziFetch.createNewSession+sessionName+"?size="+size).pipe(
        map((res) => {
            return res.response;
        })
    );
};

export default NewDndSessionService;