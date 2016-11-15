import { MongoObservable } from 'meteor-rxjs';
import {Home} from "../models/home.model";

//mongoDB collection
export const Homes = new MongoObservable.Collection<Home>('homes');
