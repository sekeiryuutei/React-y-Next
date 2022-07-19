import React from 'react';
import dynamic from 'next/dynamic';

// https://github.com/fullcalendar/fullcalendar-react/issues/17
const DynamicCalendar = dynamic(() => import('../../components/Extras/calendar.view.js'), {
    ssr: false
});

export default () => <DynamicCalendar />;
