import React from "react";

function Transition() {
    const [isPending, startTransition] = React.useTransition();
    const [count, setCount] = React.useState(0);

    function handleClick() {
        startTransition(() => {
            setCount(c => c+1);
        })
    }

    return (
        <div>
            {isPending && <div>업데이트 지연</div>}
            <button onClick={handleClick}>{count}</button>
        </div>
    );
}

export default Transition;