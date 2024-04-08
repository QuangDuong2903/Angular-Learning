const MenuItem = (itemID: string) => {
    return (value) => {
        return class extends value {
            id = itemID
        }
    }
}

@MenuItem("123")
class Pizza {
    id: string
}

@MenuItem("1234")
class Hambuger {
    id: string
}

console.log(new Pizza().id)
console.log(new Hambuger().id)