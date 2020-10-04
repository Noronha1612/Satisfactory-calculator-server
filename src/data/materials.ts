const materials = {
    ores: [
        'ironOre',
        'copperOre',
        'cateriumOre',
        'coal',
        'limestone',
        'bauxite',
        'rawQuartz',
        'samOre',
        'sulfur',
        'uranium'
    ],

    fluids: [
        'water',
        'crudeOil'
    ],

    components: {
        solid: {
            biomass: {
                constructor: [
                    {
                        ingredients: {
                            leaves: 120
                        },
                        generate: 60,
                        tier: 0
                    },
                    {
                        ingredients: {
                            wood: 60
                        },
                        generate: 300,
                        tier: 0 
                    }
                ]
            },
            cable: {
                constructor: [
                    {
                        ingredients: {
                            wire: 60
                        },
                        generate: 30,
                        tier: 0
                    }
                ],
                refinery: [
                    {
                        ingredients: {
                            wire: 37.5,
                            heavyOilResidue: 15
                        },
                        generate: 67.5,
                        tier: 5
                    }
                ],
                assembler: [
                    {
                        ingredients: {
                            wire: 45,
                            rubber: 30
                        },
                        generate: 100,
                        tier: 5
                    }
                ]
            }
        },
        fluid: {

        }
    }
}

export default materials;