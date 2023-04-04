export const fakeData = [
    {
        user: {
            id: 0,
            name: 'Diana',
        },
        todos: [
            {
                id: 0,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Löhne',
                order: 0,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 1,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Hoch',
                order: 1,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 2,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Mittel',
                order: 2,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 3,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Mittel',
                order: 3,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 0,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Mittel',
                order: 0,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 1,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Niedrig',
                order: 1,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 2,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Löhne',
                order: 2,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 3,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Löhne',
                order: 3,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
        ]
    },
    {
        user: {
            id: 1,
            name: 'Hurda',
        },
        todos: [
            {
                id: 4,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Löhne',
                order: 0,
                type: 'Personalwesen',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 5,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Löhne',
                order: 1,
                type: 'irgendwas',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 6,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Löhne',
                order: 2,
                type: 'snack',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
            {
                id: 7,
                customer: {
                    name: 'abz GmbH'
                },
                priority: 'Löhne',
                order: 3,
                type: 'sleep',
                timeframe: 'Apr 2022',
                note: 'Fuck this shit up',
                status: 'open',
            },
        ]
    },
]

const todos = fakeData[0].todos

todos.sort(function (a, b) {
    const priorities = ['Löhne', 'Hoch', 'Mittel', 'Niedrig'];

    // Get the index of the priority for each todo in the priorities array
    const indexA = priorities.indexOf(a.priority);
    const indexB = priorities.indexOf(b.priority);

    // If the priorities are different, sort by priority index
    if (indexA !== indexB) {
        return indexA - indexB;
    }

    // If the priorities are the same, sort by order property
    return a.order - b.order;
});

console.log(todos)