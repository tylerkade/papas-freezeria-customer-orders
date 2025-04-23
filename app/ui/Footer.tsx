export default function Footer() {
  const acknowledgement = ", without which this site wouldn't exist.";
  return (
    <footer className="px-[15px] pb-12 pt-4 text-center text-gray-500">
      <div className="text-sm">
        <p>All content belongs to Flipline Studios</p>
        <p>
          All customer and order images were acquired from this{" "}
          <a
            href="https://steamcommunity.com/sharedfiles/filedetails/?id=2962628724"
            className="text-cyan-600"
          >
            Steam guide
          </a>
          {acknowledgement}
        </p>
      </div>
    </footer>
  );
}
