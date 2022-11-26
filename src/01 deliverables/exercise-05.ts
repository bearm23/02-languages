console.log("************** DELIVERABLE 05 *********************");

interface SlothMachineConfig {
    cheatingTheMachine?: boolean;
    hotMachine?: boolean;
}

class SlothMachine {
    private coins: number = 0;
    private result1: boolean = false;
    private result2: boolean = false;
    private result3: boolean = false;

    private correct = "💎";
    private incorrect = "💩";

    private randomResult = 0.5; // play legal!

    constructor({
        cheatingTheMachine = false,
        hotMachine = false,
    }: SlothMachineConfig = {}) {
        if (cheatingTheMachine) {
            this.randomResult = 0.9;
        }

        if (hotMachine) {
            this.coins = 100;
        }
    }

    play(insertedCoins: number = 1) {
        this.insertCoins(insertedCoins);

        this.result1 = this.getRandomResult();
        this.result2 = this.getRandomResult();
        this.result3 = this.getRandomResult();

        this.printResultInConsole();

        if ([this.result1, this.result2, this.result3].every((result: boolean) => result)) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.resetCoins();
        } else {
            console.log('Good luck next time!!');
        }
    }

    insertCoins(insertedCoins: number) {
        this.coins = this.coins + insertedCoins;
    }

    resetCoins() {
        this.coins = 0;
    }

    getRandomResult(): boolean {
        return Math.random() < this.randomResult;
    }

    printResultInConsole() {
        console.log(`${this.printCorrectOrIncorrect(this.result1)} - ${this.printCorrectOrIncorrect(this.result2)} - ${this.printCorrectOrIncorrect(this.result3)}`);
    }

    printCorrectOrIncorrect(result: boolean): string {
        return result ? this.correct : this.incorrect;
    }
}

const machine1 = new SlothMachine();
machine1.play(2);
machine1.play();
machine1.play(5);
machine1.play();
machine1.play(10);

console.log('--- A compulsive gambler just left and left a hot machine... Play the hot machine! ---');

const machineHacked = new SlothMachine({cheatingTheMachine: true, hotMachine: true});
machineHacked.play(30);
machineHacked.play(20);
machineHacked.play(40);
machineHacked.play(60);
machineHacked.play(10);