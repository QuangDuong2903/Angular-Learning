const myName: string = 'Quang Duong'
const a: number = 1

let b: string | null = null
b = 'ahihi'

// arrays 
let items: string[] = ['a', 'b']

const account: {
    name: string,
    balance: number,
    status?: string
} = {
    name: 'Luis',
    balance: 10
}

// store array of objects
// let accounts: {}[]

interface IAccount {
    name: string,
    balance: number,
    status?: number,
    deposit?: () => number
}

const x: IAccount = {
    name: 'Luis',
    balance: 10,
    status: 1
}

let accounts: IAccount[]

class InvestmentAccount implements IAccount {
    constructor(
        public name: string, public balance: number
    ) {

    }

    private withdraw(): void {

    }
}
