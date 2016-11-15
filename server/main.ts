import {Meteor} from 'meteor/meteor';
import {loadHomes} from "./imports/fixtures/homes";

Meteor.startup(()=> {
    loadHomes();
});
