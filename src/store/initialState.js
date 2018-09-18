let exampleState = {
    careers:  [
        {
            title: "Career 1",
            careerName: "Career One",
            location: "Los Angeles",
            key: 4654651684528651865,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        },
        {
            title: "Career 2",
            careerName: "Career Two",
            location: "New York",
            key: 4654651284528651865,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        },
        {
            title: "Career 3",
            careerName: "Career Three",
            location: "Boston",
            key: 4654651284528611865,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        }
    ],
    careerNamesSelect: ["All", "Career One", "Career Two", "Career Three"],
    locations: ["All", "Los Angeles", "New York", "Boston"]
}


let getSavedState = function(){
    return JSON.parse(localStorage.getItem('savedState'));
}

let initialState = getSavedState() || exampleState;

export default initialState;