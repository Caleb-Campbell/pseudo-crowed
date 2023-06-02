import React from "react";
import { Box, DarkBox } from "~/components/Box";
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Button from "~/components/Buttons";
import Layout from "~/layouts";

const LandingPage = () => {

  return (
    <Layout>

    <div className="bg-darkBack h-screen flex justify-center items-center">
          <div className="bg-big-background min-h-screen flex items-center justify-center">
            <Box className="bg-alternate-box-background p-8 rounded-lg shadow-big">
              <h1 className="text-4xl font-bold text-light-text mb-4">Welcome to our App</h1>
              <p className="text-dark-text">
                Discover the power of our organization app and streamline your tasks with ease.
              </p>
        <Button width="lg" className="mt-10" align="middle">
          Get Started
        </Button>
      </Box>
    </div>
    </div>
      </Layout>
  );
};

export default LandingPage;