export class Point {
    x: number;
    y: number;

    constructor();
    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    };

    toString(): string {
        return `(${this.x}, ${this.y})`
    }

    distance(a: Point | number, b: number): number {
        let dx: number;
        let dy: number;

        if (a === undefined) {
            dx = 0 - this.x;
            dy = 0 - this.y;
            return Math.sqrt(dx ** 2 + dy ** 2);
        } else if (a instanceof Point) {
            dx = a.x - this.x;
            dy = a.y - this.y;
            return Math.sqrt(dx ** 2 + dy ** 2);
        } else if (typeof a === 'number' && typeof b === 'number') {
            dx = a - this.x;
            dy = b - this.y;
            return Math.sqrt(dx ** 2 + dy ** 2);
        }
        return Number();
    };
}
