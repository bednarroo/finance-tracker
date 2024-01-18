import { startOfYear, endOfYear, sub, startOfMonth, endOfMonth, startOfDay, endOfDay, } from "date-fns"

export const useSelectedTimePeriod = (period) => {
    const dates = computed(
        () => {
            switch(period.value){
                case 'Yearly':
                    return {
                        current: {
                            from: startOfYear(new Date()),
                            to: new Date()
                        },
                        previous: {
                            from: startOfYear(sub(new Date()), {years: 1}),
                            to: endOfYear(sub(new Date()), {years: 1})
                        }
                    }
                case 'Monthly':
                    return {
                        current: {
                            from: startOfMonth(new Date()),
                            to: new Date()
                        },
                        previous: {
                            from: startOfMonth(sub(new Date()), {months: 1}),
                            to: startOfMonth(sub(new Date()), {monthss: 1})
                        }
                    }
                    case 'Daily':
                        return {
                            current: {
                                from: startOfDay(new Date()),
                                to: new Date()
                            },
                            previous: {
                                from: startOfDay(sub(new Date()), {days: 1}),
                                to: startOfDay(sub(new Date()), {days: 1})
                            }
                        }
            }
        }
    )
    return dates
}