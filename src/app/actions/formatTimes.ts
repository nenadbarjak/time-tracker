import * as moment from 'moment'
import * as _ from 'underscore'

export const formatTimes = (arr) => {
    return _.chain(arr)
        .groupBy((time) => moment(time.startTime).startOf('day').valueOf())
        .map((group, day) => ({
            day: parseInt(day),
            times: group
        }))
        .sortBy('day')
        .reverse()
        .value();
}