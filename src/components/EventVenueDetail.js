
const EventVenueDetail = ({event}) => {

    if (!event) return <div>Loading venue details...</div>;
console.log("Venue Details:", event?.city?.name);

    const address = `${event.address?.line1 || ''}, ${event.city?.name || ''}, ${event.state?.stateCode || ''} ${event.postalCode || ''}, ${event.country?.name || ''}`;
    const phone = event.boxOfficeInfo?.phoneNumberDetail || 'N/A';
    const openHours = event.boxOfficeInfo?.openHoursDetail || 'N/A';
    const generalRule = event.generalInfo?.generalRule || 'N/A';
    const childRule = event.generalInfo?.childRule || 'N/A';
    const bookEventUrl = event.url || '#';

    return (
        <div className="event-detail-container">
            <h2 className="event-detail-title">Venue Details</h2>
            <div className="event-detail-content">
                <div className="event-detail-info">
                    <div>
                        <span className="info-label"><i className="fas fa-map-marker-alt"></i> Address</span>
                        <span>{address}</span>
                    </div>
                    <div>
                        <span className="info-label"><i className="fas fa-phone"></i> Phone</span>
                        <span>{phone}</span>
                    </div>
                    <div>
                        <span className="info-label"><i className="fas fa-clock"></i> Open Hours</span>
                        <span>{openHours}</span>
                    </div>
                    <div>
                        <span className="info-label"><i className="fas fa-exclamation-circle"></i> General Rule</span>
                        <span>{generalRule}</span>
                    </div>
                    <div>
                        <span className="info-label"><i className="fas fa-child"></i> Child Rule</span>
                        <span>{childRule}</span>
                    </div>
                     <div>
                        <span className="info-label"><i className="fas fa-child"></i> Book Event</span>
                        <button  className="btn btn-primary bookEvent"><a href={bookEventUrl} aria-label="Book this event">Book Now</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventVenueDetail;