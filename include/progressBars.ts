



class ProgressBar {
    progress: number = 0.0;

    type: string = "default";

    startSymbol: string = "[";
    endSymbol: string = "]";
    progressSymbol: string = "=";
    emptySymbol: string = " ";
    length: number = 20;

    createType(startEndSymbol: string, progressSymbol: string, emptySymbol: string, length: number) {
        this.type = "custom";
        const parts = startEndSymbol.split(" ");
        this.startSymbol = parts[0] || this.startSymbol;
        this.endSymbol = parts[1] || this.endSymbol;
        this.progressSymbol = progressSymbol;
        this.emptySymbol = emptySymbol;

        this.length = length;
    }

    update(value: number) {
        this.progress = Math.max(0, Math.min(1, value));
    }
    display() {
        const filledLength = Math.max(0, Math.min(this.length, Math.round(this.length * this.progress)));
        const output = this.startSymbol + this.progressSymbol.repeat(filledLength) + this.emptySymbol.repeat(this.length - filledLength) + this.endSymbol;
        return output;
    }
}
export { ProgressBar };