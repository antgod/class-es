//export * from 'circle';       //全部继承
export { circleArea as area } from './circle'; //改名
export default function(x) {
    return Math.exp(x);
}