import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Track = props => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div
        className="card mb-4 shadow-sm"
        style={{ borderRadius: "10px", boxShadow: "5px 5px 10px" }}
      >
        <div className="card-body">
          <label>
            <i className="fas fa-user" /> Artist:
            <h5>{track.artist_name}</h5>
          </label>
          <br />
          <label>
            <i className="fas fa-play" /> Track:
            <h5>{track.track_name}</h5>
          </label>
          <br />
          <label>
            <i className="fas fa-compact-disc" /> Album:
            <h6>{track.album_name}</h6>
          </label>
          <br />
          <label>
            <i className="fas fa-calendar-alt" /> Release Date:
            <h6>
              <Moment format="MM/DD/YYYY">{track.first_release_date}</Moment>
            </h6>
          </label>
          <br />
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-info btn-block"
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
