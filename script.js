const root=document.documentElement;document.querySelector("#demoMode").addEventListener("click",()=>{document.querySelector("#demoMode").textContent=document.querySelector("#demoMode").textContent==="DEMO"?"LIVE DEMO":"DEMO"});document.querySelector("#simulate").addEventListener("click",()=>{const t=document.querySelector("#toast");t.classList.add("show");document.querySelector("#time").textContent="just now";setTimeout(()=>t.classList.remove("show"),2600)});function ack(btn){btn.textContent="Acknowledged ✓";btn.disabled=true;btn.style.opacity=".55"}window.addEventListener("pointermove",e=>{const x=(e.clientX/innerWidth-.5)*10,y=(e.clientY/innerHeight-.5)*10;root.style.setProperty("--mx",x+"px");root.style.setProperty("--my",y+"px")});

// Synthetic location/value prediction demo.
// This intentionally does NOT connect to real banking, police, NCRP/1930, or ATM systems.
(function () {
  const amount = document.getElementById("amountInput");
  const lat = document.getElementById("latInput");
  const lng = document.getElementById("lngInput");
  const btn = document.getElementById("predictBtn");
  const rows = document.getElementById("locationRows");
  const valueOutput = document.getElementById("valueOutput");
  const riskOutput = document.getElementById("riskOutput");
  const windowOutput = document.getElementById("windowOutput");
  const note = document.getElementById("predictionNote");
  const pin = document.getElementById("userPin");

  const money = n => "₹" + Math.round(n).toLocaleString("en-IN");

  function runPrediction() {
    const value = Math.max(0, Number(amount.value) || 0);
    const la = Number(lat.value) || 0;
    const lo = Number(lng.value) || 0;

    // Demo-only scoring formula: larger value slightly raises synthetic risk.
    const base = Math.min(97, 62 + Math.log10(Math.max(value, 1000)) * 5);
    const locations = [
      ["ATM 07", base + 5, "0.8 km", value * .54],
      ["ATM 14", base - 3, "1.6 km", value * .29],
      ["ATM 21", base - 11, "2.4 km", value * .17]
    ].map((x, i) => ({name:x[0], risk:Math.max(55,Math.min(98,x[1])), distance:x[2], est:x[3], rank:i+1}));

    valueOutput.textContent = money(value);
    riskOutput.textContent = value >= 50000 ? "CRITICAL" : value >= 20000 ? "HIGH" : "MEDIUM";
    riskOutput.className = value >= 20000 ? "risk-high" : "risk-med";
    windowOutput.textContent = value >= 50000 ? "Next 1–4 hours" : "Next 2–6 hours";
    note.textContent = `Synthetic ranking centered on ${la.toFixed(4)}, ${lo.toFixed(4)}. No real-world location is inferred.`;

    rows.innerHTML = locations.map(x => `
      <tr>
        <td>#${x.rank}</td><td>${x.name}</td>
        <td class="${x.risk >= 80 ? "risk-high" : "risk-med"}">${x.risk.toFixed(0)}%</td>
        <td>${x.distance}</td><td>${money(x.est)}</td>
        <td><button class="action-btn" data-name="${x.name}">View</button></td>
      </tr>`).join("");

    // Put the user's entered point into the visual demo map.
    const left = 50 + ((lo - 79.4304) * 12);
    const top = 57 - ((la - 28.3670) * 12);
    pin.style.left = Math.max(8, Math.min(92, left)) + "%";
    pin.style.top = Math.max(12, Math.min(88, top)) + "%";

    rows.querySelectorAll(".action-btn").forEach(b => b.onclick = () => {
      note.textContent = `${b.dataset.name} selected. Demo only: open your GIS/Leaflet layer here for detailed map coordinates.`;
    });
  }

  if (btn) btn.addEventListener("click", runPrediction);
  runPrediction();
})();
