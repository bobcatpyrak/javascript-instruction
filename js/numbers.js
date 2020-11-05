let nbrs = [
    106,    573,    204,    804,    482,
    457,    769,    889,    860,    399,
    599,    824,    346,    851,    450,
    590,    520,    321,    341,    619,
    505,    769,    532,    764,    101
]

let high = 0;
let low = 99999;

for(let i of nbrs)
{
    if (high < i)
        high = i;
}
for(let i of nbrs)
{
    if (low > i)
        low = i;
}

const showNum = () =>
{
    let highest = document.getElementById("high");
    let lowest = document.getElementById("low");
    highest.value = high;
    lowest.value = low;
}