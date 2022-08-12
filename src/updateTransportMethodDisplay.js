const updateTransportationMethodDisplay = (TransportMethod) => {
    const transportationMethodDisplay = document.getElementById('currentTransportMethod');
    // console.log(transportationMethodDisplay);
    transportationMethodDisplay.innerText = TransportMethod;
}

export default updateTransportationMethodDisplay;