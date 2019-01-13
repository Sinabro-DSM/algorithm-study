function solution(s)
{
    return sol(s);
}

function sol(string) {
    const stack = [];
    for(let i = 0; i < string.length; i++) {
        const len = stack.length;
        if(stack.length === 0)
            stack.push(string[i]);
        else {
            if(stack[len-1] === string[i])
                stack.pop();
            else
                stack.push(string[i]);
        }
    }
    if(stack.length === 0)
        return 1;
    return 0;
}