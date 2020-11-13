class Laptop {
    constructor(info, quality) {
        this.info = info
        this.isOn = false
        this.quality = Number(quality)
    }

    turnOn = () => {
        this.isOn = true
        this.quality -= 1
    }
    turnOff = () => {
        this.isOn = false
        this.quality -= 1
    }
    showInfo = () => JSON.stringify(this.info)
    get price() {
        return 800 - (Number(this.info.age) * 2) + (this.quality * 0.5)
    }
}
