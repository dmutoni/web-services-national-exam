import React from 'react'

export default function AddCarOwner() {
    const [ownerName, setOwnerName] = useState('');
    const [ownerAddress, setOwnerAddress] = useState('');
    const [ownerPhone, setOwnerPhone] = useState('');
    const [ownerNationalId, setOwnerNationalId] = useState('');

    return (
        <div className="col-12 d-block d-lg-flex flex-row gap-lg-4 ">
          <div className="col-2 ">
            <Sidebar />
          </div>
          <div className="col-10 col-lg-4 m-3">
            <h3>Add Car Owner</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="carOwner">Owner name</label>
                <input
                  type="text"
                  className="form-control"
                  id="carOwner"
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ownerNationalId">Owner national id</label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerNationalId"
                  onChange={(e) => setManufactureCompany(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="ownerPhoneNumber">Owner phone number</label>
                <input type={"text"} className="form-control" id="ownerPhoneNumber" onChange={(e) => setManufactureYear(e.target.value) } />
              </div>
              <div className="form-group">
                <label htmlFor="ownerAddress">Owner address</label>
                <input
                  type="text"
                  className="form-control"
                  id="ownerAddress"
                  onChange={(e) => setModelName(e.target.value)}
                />
              </div>
                <button
                  type="submit"
                  className="btn bg-app-primary bg-text-color col-12"
                >
                  Submit
                </button>
            </form>
          </div>
        </div>
    )
}
