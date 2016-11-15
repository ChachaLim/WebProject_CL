import {Homes} from '../../../both/collections/homes.collection';
import {Home} from "../../../both/models/home.model";

/*
 * loadHomes : server/main.ts의 meteor.startUp()에서 호출.
 */
export function loadHomes() {
    if (Homes.find().cursor.count() === 0) { //Homes에 자료가 0개 이면 homes에 아래와 같은 데이터 삽입
        const homes: Home[] = [
            {hoster: "Cha YeongHun", location: "busan", price: "300$"},
            {hoster: "Chris", location: "paris", price: "299$"},
            {hoster: "Michael", location: "NY", price: "350$"}
        ];

        homes.forEach((home: Home)=>Homes.insert(home)); //forEach문을 이용하여 Homes에 home을 삽입.
    }
}
