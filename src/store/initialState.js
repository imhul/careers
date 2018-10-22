import React from 'react';

let States = {
    careers: [
        {
            title: "Budtender",
            department: "Department...",
            location: "Denver, CO",
            address: "8151 E Colfax Ave, Denver, CO 80220, USA",
            key: 1,
            image: 'job.png',
            intro: "Lorem ipsum dolor sit amet",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            summary: "1 Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse"

        },
        {
            title: "Rretail Associate",
            department: "Department...",
            location: "Fraser, CO",
            address: "8151 E Colfax Ave, Fraser, CO 80220, USA",
            key: 2,
            image: 'job.png',
            intro: "Lorem ipsum dolor sit amet",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            summary: "2 Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse"

        },
        {
            title: "Lead Budtender",
            department: "Department...",
            location: "Littleton, CO",
            address: "8151 E Colfax Ave, Littleton, CO 80220, USA",
            key: 3,
            image: 'job.png',
            intro: "Lorem ipsum dolor sit amet",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            summary: "3 Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse"

        },
        {
            title: "Chief Financial Officer",
            department: "Department...",
            location: "Denver, CO",
            address: "8151 E Colfax Ave, Denver, CO 80220, USA",
            key: 4,
            image: 'job.png',
            intro: "Lorem ipsum dolor sit amet",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            summary: "4 Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse"

        },
        {
            title: "Project Manager",
            department: "Department...",
            location: "Fraser, CO",
            address: "8151 E Colfax Ave, Fraser, CO 80220, USA",
            key: 5,
            image: 'job.png',
            intro: "Lorem ipsum dolor sit amet",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            summary: "5 Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse"
        
        },
        {
            title: "Lead Rretail Associate",
            department: "Department...",
            location: "Littleton, CO",
            address: "8151 E Colfax Ave, Littleton, CO 80220, USA",
            key: 6,
            image: 'job.png',
            intro: "Lorem ipsum dolor sit amet",
            description: "Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            summary: "6 Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse"
        
        }
    ],
    specials: [
        {
            title: "I Step into THE GARDEN Rewards Program",
            subtitle: "Grow Your Perfect Once"
        },
        {
            title: "II Step into THE GARDEN Rewards Program",
            subtitle: "Grow Your Perfect Once"
        }
    ],
    careerNamesSelect: [
        "All", 
        "Budtender", 
        "Rretail Associate", 
        "Lead Budtender", 
        "Chief Financial Officer", 
        "Project Manager", 
        "Lead Rretail Associate"],
    locations: ["All", "Denver, CO", "Fraser, CO", "Littleton, CO"],
    topMenu: [
        {
            icon: 'icon-logo',
            key: 0,
            title: "Cannabis Products",
            href: "https://silverstemcannabis.com/cannabis-products/full-menu"
        },
        {
            icon: 'icon-map',
            key: 1,
            title: "Dispendsries",
            href: "https://silverstemcannabis.com/dispensaries"
        },
        {
            icon: 'icon-book',
            key: 2,
            title: `News & Articles`,
            href: "https://silverstemcannabis.com/news-articles"
        },
        {
            icon: 'icon-percent',
            key: 3,
            title: "Specials",
            href: "https://silverstemcannabis.com/specials"
        },
        {
            icon: 'icon-loyalty',
            key: 4,
            title: "Loyality Members",
            href: "https://silverstemcannabis.com/loyalty-program"
        },
        {
            icon: 'icon-shopping_cart',
            key: 5,
            title: "Order now",
            href: "https://silverstemcannabis.com/order-now"
        }
    ],
    bottomMenu: [
        {
            id: 1000,
            parent: false,
            title: "Specials & Dials",
            href: "https://silverstemcannabis.com/specials"
        },
        {
            id: 1001,
            parent: false,
            title: "Careers",
            href: "https://silverstemcannabis.com/careers"
        },
        {
            id: 1002,
            parent: false,
            title: "Sitemap",
            href: "https://silverstemcannabis.com/sitemap"
        },
        {
            id: 1003,
            parent: false,
            title: "Terms of Use",
            href: "https://silverstemcannabis.com/terms-of-use"
        },
        {
            id: 1004,
            parent: true,
            title: "Marijuana Strains",
            href: "https://silverstemcannabis.com/cannabis-products/flower"
        },
        {
            id: 1005,
            parent: 1004,
            title: "Indica",
            href: "https://silverstemcannabis.com/cannabis-products/indica"
        },
        {
            id: 1006,
            parent: 1004,
            title: "Sativa",
            href: "https://silverstemcannabis.com/cannabis-products/sativa"
        },
        {
            id: 1007,
            parent: 1004,
            title: "Hybrid",
            href: "https://silverstemcannabis.com/cannabis-products/hybrid"
        },
        {
            id: 1008,
            parent: false,
            title: "Cannabis Concentrates",
            href: "https://silverstemcannabis.com/cannabis-products/concentrates"
        },
        {
            id: 1009,
            parent: false,
            title: "Cannabis Topicals",
            href: "https://silverstemcannabis.com/cannabis-products/topicals"
        },
        {
            id: 1010,
            parent: false,
            title: "Marijuana Edibles",
            href: "https://silverstemcannabis.com/cannabis-products/edibles"
        },
        {
            id: 1011,
            parent: false,
            title: "Vape",
            href: "https://silverstemcannabis.com/cannabis-products/vaporize-cartridges"
        },
        {
            id: 1012,
            parent: false,
            title: "Apparel & Accessories",
            href: "https://silverstemcannabis.com/cannabis-products/accessories-n-merchandise"
        }
    ]
}


let getSavedState = function () {
    return JSON.parse(localStorage.getItem('savedState'));
}

let initialState = getSavedState() || States;
const careers = initialState.careers;
const specials = initialState.specials;
const careerNamesSelect = initialState.careerNamesSelect;
const locations = initialState.locations;
const topMenu = initialState.topMenu;
const bottomMenu = initialState.bottomMenu;

export { careers, specials, careerNamesSelect, locations, topMenu, bottomMenu };