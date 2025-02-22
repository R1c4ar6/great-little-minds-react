import React from 'react';
import { Container } from 'react-bootstrap';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const localizer = momentLocalizer(moment);

interface Event {
    title: string;
    start: Date;
    end: Date;
    color: string;
}

const Calendar: React.FC = () => {
    const { t, i18n } = useTranslation();

    const events: Event[] = Object.values(t('calendar.events', { returnObjects: true })).map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
    }));

    moment.locale(i18n.language);

    const eventPropGetter = (event: Event) => {
        return {
            style: {
                backgroundColor: event.color, 
                color: '#000',
            },
        };
    };

    // Translate toolbar messages
    const messages = {
        today: t('calendar.toolbar.today'),
        previous: t('calendar.toolbar.previous'),
        next: t('calendar.toolbar.next'),
        month: t('calendar.toolbar.month'),
        week: t('calendar.toolbar.week'),
        day: t('calendar.toolbar.day'),
        agenda: t('calendar.toolbar.agenda'),
    };

    return (
        <section id='calendar' className='section-padding'>
            <Container className='mb-5' style={{ height: '500px' }}>
                <h2 className='text-center'>{t('calendar.title')}</h2>
                <BigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    titleAccessor="title"
                    culture={i18n.language}
                    messages={messages}
                    eventPropGetter={eventPropGetter} // Apply event colors
                    views={['month', 'week', 'day', 'agenda']}
                    defaultView="month"
                    style={{ height: 500 }}
                />
            </Container>
        </section>
    );
};

export default Calendar;