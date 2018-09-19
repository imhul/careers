let exampleState = {
    careers: [
        {
            title: "Career 1",
            careerName: "Career One",
            location: "Los Angeles",
            key: 10,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        },
        {
            title: "Career 2",
            careerName: "Career Two",
            location: "New York",
            key: 11,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        },
        {
            title: "Career 3",
            careerName: "Career Three",
            location: "Boston",
            key: 12,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        },
        {
            title: "Career 4",
            careerName: "Career Four",
            location: "Los Angeles",
            key: 13,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        },
        {
            title: "Career 5",
            careerName: "Career Five",
            location: "New York",
            key: 14,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        },
        {
            title: "Career 6",
            careerName: "Career Six",
            location: "Boston",
            key: 15,
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        }
    ],
    careerNamesSelect: ["All", "Career One", "Career Two", "Career Three", "Career Four", "Career Five", "Career Six"],
    locations: ["All", "Los Angeles", "New York", "Boston"]
}


let getSavedState = function () {
    return JSON.parse(localStorage.getItem('savedState'));
}

let initialState = getSavedState() || exampleState;

export default initialState;