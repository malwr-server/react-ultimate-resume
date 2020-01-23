import moment from 'moment';
import * as uuid from 'uuid/v4';

export const mapStudiesFromJsonResume = jsonResume => {
    return jsonResume?.education.map(study => ({
        ...study,
        //generating uuid for manipulating data if not present
        id: study.id || uuid(),
        startDate: moment(study.startDate, 'YYYY-MM-DD'),
        endDate: moment(study.endDate, 'YYYY-MM-DD')
    }));
};

export const mapStudiesToJsonResume = data => {
    console.log(data);
    return {
        education: data.education?.map(study => ({
            ...study,
            startDate: study.startDate.format('YYYY-MM-DD'),
            endDate: study.endDate.format('YYYY-MM-DD')
        }))
    };
};