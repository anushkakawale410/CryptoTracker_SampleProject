const form = document.querySelector('#searchForm');
const res = document.querySelector('#resTable');
const cont = document.getElementById("allContaint");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const ctype = form.elements.coinType.value;
    cont.classList.add('mainClick');
    cont.classList.remove('main');    
    fetchPrice(ctype);

});

const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    showPrice(r.data.coin);
}


const showPrice = (coinData)=>{
    const symbol = coinData.symbol;
    const price = coinData.price;
    const vol = coinData.volume;
    const change = coinData.priceChange1d;
    const coin = coinData.name; 
    const curr = 'INR';
    var col= "green";
    if(change<0){
        col = "red";
    }
    res.innerHTML = `<tr class="bg-subtle" style="color: #176B87;">
    <td>
        Property
    </td>
    <td>
        Value
    </td>
</tr>
<tr>
    <td style="color: #176B87;"> Symbol </td>
    <td><span style="font-size: 1.3em;">${symbol}</span> </td>
</tr>
<tr>
    <td style="color: #176B87;">${coin}</td>
    <td style="color:${col};"><span style="font-size: 1.3em;">${price}</span> ${curr}</td>
</tr>
<tr>
    <td style="color: #176B87;">Volume (24hrs)</td>
    <td>${vol}</td>
</tr>`;
};
