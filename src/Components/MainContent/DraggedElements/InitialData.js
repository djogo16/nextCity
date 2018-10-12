export const transport = {
    variables : {
        'DP03_0025E':{
            id: 'DP03_0025E',
            name : 'Mean Travel Time to Work (minutes)',
            description : `For people who commute to work, the estimate mean 
            travel time to work in minutes. Source: American Community Survey 2017.`
        },
        'DP03_0021PE' :{
            id : 'DP03_0021PE',
            name : 'Use of Public Transportation',
            description :`For people who commute to work, the percentage of workers over 16 who use
            public transportation(excluding taxicabs). Source:American Community Survey 2017.`
        },

    },
    columns: {
        'transport':{
            id:"transport",
            title:"Transport",
            variableIds:['DP03_0025E','DP03_0021PE'],
        
        },
    },
    columnOrder : ['transport'],
}

export const economy = {
    variables : {
        'DP03_0092E':{
            id: 'DP03_0092E',
            name : 'Median Earnings for Workers (dollars)',
            description : `Estimate income and benefits 
            (in 2017 inflation-adjusted dollars). Source: American Community Survey 2017.`
        },
        'DP03_0119PE' :{
            id : 'DP03_0119PE',
            name : 'Poverty Level',
            description :`Percentage of families and people whose income in the past 12 months is below the poverty level. 
            Source:American Community Survey 2017.`
        },
        'DP03_0005PE' :{
            id : 'DP03_0005PE',
            name : 'Unemployment Rate',
            description :`Percentage of people over 16 whose employment status is unemployed. 
            Source:American Community Survey 2017.`
        },
        'DP03_0099PE' :{
            id : 'DP03_0099PE',
            name : 'Health Insurance Coverage',
            description :`Percentage of the civilian noninstitutionalized 
            population with health insurance coverage. Source:American Community Survey 2017.`
        },
        

    },
    columns: {
        'economy':{
            id:"economy",
            title:"Economy",
            variableIds:['DP03_0092E','DP03_0119PE','DP03_0005PE','DP03_0099PE'],
        
        },
    },
    columnOrder : ['economy'],
}
export const housing = {
    variables : {
        'DP04_0136PE':{
            id: 'DP04_0136PE',
            name : 'GRAPI',
            description : `Gross Rent as Percentage of Household Income
            Source:American Community Survey 2017.`
        },
        'DP04_0134E':{
            id: 'DP04_0134E',
            name : 'Rent',
            description : `Gross rent for occupied units paying rent.
            Source:American Community Survey 2017.`
        },
        'DP04_0080E':{
            id: 'DP04_0080E',
            name : 'House Value',
            description : `Estimate value of owner-occupied units.
            Source:American Community Survey 2017.`
        },
    },
    columns: {
        'housing':{
            id:"housing",
            title:"Housing",
            variableIds:['DP04_0136PE','DP04_0134E','DP04_0080E'],
        
        },
    },
    columnOrder : ['housing'],
}
