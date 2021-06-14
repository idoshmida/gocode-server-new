import {useState} from 'react';

function Counter(props) {

const {color, initialCount, onIncrement} = props;
const [count, setCount] = useState(initialCount)

function increment() {
setCount(count + 1);
onIncrement(1);

}
function increment2() {
    
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    onIncrement(2);
    }
return(
    <div style={{color, padding: 50 }}>
        
        <div>{count}</div>
        <button onClick={() => increment()}>increment</button>
        <button onClick={() => increment2()}>increment by 2</button>

        </div>
)




}

export default Counter;