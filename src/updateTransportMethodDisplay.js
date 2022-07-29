const updateTransportationMethodDisplay = (TransportMethod) => {
    const transportationMethodDisplay = document.getElementById('cuurentTransportMethod');
    console.log(transportationMethodDisplay);
    transportationMethodDisplay.innerText = TransportMethod;
}

export default updateTransportationMethodDisplay;