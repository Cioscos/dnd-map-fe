import {Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators";
import UserDetails from "../types/UserDetails";

const UserDetailsService = (): Observable<UserDetails> => {

    return ajax.get<UserDetails>("").pipe(
        map((res) => {
            return res.response;
        })
    );
};

export default UserDetailsService;