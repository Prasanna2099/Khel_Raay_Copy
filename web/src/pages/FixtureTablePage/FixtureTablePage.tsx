import { Metadata } from '@redwoodjs/web';

const FixtureTablePage = () => {
  // Mock data for 20 fixtures
  const fixtures = [
    { team1: 'CSK', team2: 'RCB', date: 'Fri, Mar 22', time: '7:30 PM IST', venue: 'Chennai' },
    { team1: 'PBKS', team2: 'DC', date: 'Sat, Mar 23', time: '3:30 PM IST', venue: 'Mohali' },
    { team1: 'KKR', team2: 'SRH', date: 'Sat, Mar 23', time: '7:30 PM IST', venue: 'Kolkata' },
    { team1: 'RR', team2: 'LSG', date: 'Sun, Mar 24', time: '3:30 PM IST', venue: 'Jaipur' },
    { team1: 'GT', team2: 'MI', date: 'Sun, Mar 24', time: '7:30 PM IST', venue: 'Ahmedabad' },
    { team1: 'RCB', team2: 'PBKS', date: 'Mon, Mar 25', time: '7:30 PM IST', venue: 'Bengaluru' },
    { team1: 'CSK', team2: 'GT', date: 'Tue, Mar 26', time: '7:30 PM IST', venue: 'Chennai' },
    { team1: 'SRH', team2: 'MI', date: 'Wed, Mar 27', time: '7:30 PM IST', venue: 'Hyderabad' },
    { team1: 'RR', team2: 'DC', date: 'Thu, Mar 28', time: '7:30 PM IST', venue: 'Jaipur' },
    { team1: 'RCB', team2: 'KKR', date: 'Fri, Mar 29', time: '7:30 PM IST', venue: 'Bengaluru' },
    { team1: 'LSG', team2: 'PBKS', date: 'Sat, Mar 30', time: '7:30 PM IST', venue: 'Lucknow' },
    { team1: 'GT', team2: 'SRH', date: 'Sun, Mar 31', time: '3:30 PM IST', venue: 'Ahmedabad' },
    { team1: 'DC', team2: 'CSK', date: 'Sun, Mar 31', time: '7:30 PM IST', venue: 'Visakhapatnam' },
    { team1: 'MI', team2: 'RR', date: 'Mon, Apr 1', time: '7:30 PM IST', venue: 'Mumbai' },
    { team1: 'RCB', team2: 'LSG', date: 'Tue, Apr 2', time: '7:30 PM IST', venue: 'Bengaluru' },
    { team1: 'DC', team2: 'KKR', date: 'Wed, Apr 3', time: '7:30 PM IST', venue: 'Visakhapatnam' },
    { team1: 'GT', team2: 'PBKS', date: 'Thu, Apr 4', time: '7:30 PM IST', venue: 'Ahmedabad' },
    { team1: 'SRH', team2: 'CSK', date: 'Fri, Apr 5', time: '7:30 PM IST', venue: 'Hyderabad' },
    { team1: 'RR', team2: 'RCB', date: 'Sat, Apr 6', time: '7:30 PM IST', venue: 'Jaipur' },
    { team1: 'MI', team2: 'DC', date: 'Sun, Apr 7', time: '3:30 PM IST', venue: 'Mumbai' },
    { team1: 'LSG', team2: 'GT', date: 'Sun, Apr 7', time: '7:30 PM IST', venue: 'Lucknow' },
  ];

  return (
    <>
      <Metadata title="IPL Fixtures" description="IPL Fixtures page" />
      <div className="gradient-bg overflow-x-auto mt-20 mb-10">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-center text-xl font-bold text-white">IPL 2024 Fixture</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {fixtures.map((fixture, index) => (
              <tr key={index} className="row-gradient bg-gray-100 hover:bg-secondary-gradient">
                <td className="p-2 md:p-4">
                  <img
                    src={`/assets/${fixture.team1}.png`} // Update the path here
                    alt={`Team Logo Placeholder ${index + 1}`}
                    className="logo-img"
                  />
                </td>
                <td className="p-2 md:p-4 text-center">
                  <div className="font-bold text-lg">{`${fixture.team1} vs ${fixture.team2}`}</div>
                  <div className="text-sm text-gray-600">{`${fixture.date} | ${fixture.time}`}<br /><span className="font-bold">{fixture.venue}</span></div>
                </td>
                <td className="p-2 md:p-4">
                  <img
                    src={`/assets/${fixture.team2}.png`} // Update the path here
                    alt={`Team Logo Placeholder ${index + 2}`}
                    className="logo-img"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .gradient-bg {
          background-image: linear-gradient(to bottom right, #264653, #264653);
        }

        .row-gradient {
          transition: background-image 0.5s ease-in-out;
        }

        .row-gradient:hover {
          background-image: linear-gradient(to bottom right, #E76F51, #E76F51, #E76F51);
        }

        .logo-img {
          width: 80px; /* Adjust the width as needed */
          border-radius: 50%; /* Make the image circular */
          object-fit: cover; /* Maintain aspect ratio */
          display: block;
          margin: 0 auto; /* Center the image horizontally */
        }

        @media (max-width: 768px) {
          .logo-img {
            width: 60px; /* Adjusted width for smaller screens */
          }
          .table {
            font-size: 0.8rem; /* Adjusted font size for smaller screens */
          }
        }
      `}</style>
    </>
  );
};

export default FixtureTablePage;
