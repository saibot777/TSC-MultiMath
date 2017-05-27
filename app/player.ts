/**
 * Created by stefan.trajkovic on 27.5.2017..
 */
///<reference path="person.ts"/>

class Player implements Person {
    name: string;
    age: number;
    highScore: number;

    formatName() {
        return this.name.toLocaleUpperCase();
    }
}