import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useEthers } from "@usedapp/core";
import WalletProviderModal from "../WalletProviderModal";

interface AccountButtonProps {
  text?: string;
}

const AccountButton: React.FC<AccountButtonProps> = ({ text }) => {
  const { account } = useEthers();

  const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);

  const handleWalletProviderOpen = () => {
    setWalletProviderOpen(true);
  };

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };

  const buttonText = text ? text : "Unlock";

  return (
    <div>
      {!account ? (
        <Button
          onClick={handleWalletProviderOpen}
          variant="contained"
          style={{
            backgroundImage: "linear-gradient(180deg,#2b87da 0%,#29c4a9 100%)",
            color: "white",
            fontSize: "20px",
            fontFamily: "'Montserrat',Helvetica,Arial,Lucida,sans-serif",
          }}
        >
          {buttonText}
        </Button>
      ) : (
        <Button
          variant="contained"
          style={{
            backgroundImage: "linear-gradient(180deg,#2b87da 0%,#29c4a9 100%)",
            color: "white",
            fontSize: "20px",
            fontFamily: "'Montserrat',Helvetica,Arial,Lucida,sans-serif",
          }}
        >
          {account?.slice(0, 4) +
            "..." +
            account?.slice(account?.length - 4, account?.length)}
        </Button>
      )}

      <WalletProviderModal
        open={isWalletProviderOpen}
        handleClose={handleWalletProviderClose}
      />
    </div>
  );
};

export default AccountButton;
