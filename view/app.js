function ChipContent() {
  const allChip = [
    "পদার্থ", "রসায়ন", "সাধারন বিজ্ঞান", "গণিত", "সূএ", "বাংলা", "সাহিত্য", "অন্যান্য"
  ];
  
  return (
    <div style={{ marginTop: "5px" }}>
      {allChip.map((everyChip, index) => (
        <Chip key={index}>
          <ChipText>{everyChip}</ChipText>
        </Chip>
      ))}
    </div>
  );
}

function SearchContent() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100%',
    }}>
      <div style={{
        width: "300px",
        padding: "0px",
        margin: "0px",
      }}>
        <hr />
        <h6 className="bold">আরও তথ্য খুঁজেতে</h6>
        <ChipContent />
        <div className="row">
          <div className="field border label">
            <input type="text" />
            <label>তথ্যের নাম,ধরন বা বর্ণনা</label>
          </div>
          <button className="ripple">
            <i>search</i>
          </button>
        </div>
      </div>
    </div>
  );
}

function TableContent() {
  const tableContent = {
    item_1: "গণিত",
    item_2: "রাসয়ন",
    item_3: "জীববিজ্ঞান",
    item_4: "খেলাধুলা",
  };

  /* user device detect */
  let userDevice = {
    height: '100%',
    width: '100%'
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      minHeight: '100%',
    }}>
      <div>
        <table className="padding" style={{
          height: userDevice.height,
          width: userDevice.width,
          maxHeight: "400px",
          maxWidth: "400px",
          marginTop: "10%",
          marginRight: "10px",
        }} border="0">
          <tbody>
            <tr>
              <td>
                <button className="responsive vertical transparent no-round ripple">
                  <img src="/img/svg/education-learn-learning-svgrepo-com.svg" className="responsive" />
                  <span>{tableContent.item_1}</span>
                </button>
              </td>
              <td>
                <button className="responsive vertical transparent no-round ripple">
                  <img src="/img/svg/chemistry-education-lab-svgrepo-com.svg" className="responsive" />
                  <span>{tableContent.item_2}</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button className="responsive vertical transparent no-round ripple">
                  <img src="/img/svg/a-man-doing-research-and-experiments-svgrepo-com.svg" className="responsive" />
                  <span>{tableContent.item_3}</span>
                </button>
              </td>
              <td>
                <button className="responsive vertical transparent no-round ripple">
                  <img src="/img/svg/education-learning-31-svgrepo-com.svg" className="responsive" />
                  <span>{tableContent.item_4}</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <SearchContent />
      </div>
    </div> // flex div
  );
}

function MainActivityAppBar() {
  return (
    <AppBar>
      <AppBarBody>
        <img src="/img/carbonpedialogo.png" className="extra" />
        <h6>Carbon Pedia</h6>
        <div className="max"></div>
        <ButtonCircleTransparent>
          <i>person</i>
        </ButtonCircleTransparent>
      </AppBarBody>
    </AppBar>
  );
}

function MainActivity() {
  return (
    <div>
      <MainActivityAppBar />
      <TableContent />
    </div>
  );
}

router.config({
  default: <MainActivity />
});
