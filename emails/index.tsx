import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Head } from "@react-email/head";
import { Hr } from "@react-email/hr";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Link } from "@react-email/link";
import { Preview } from "@react-email/preview";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import * as React from "react";
import { Row } from "@react-email/row";
import { Column } from "@react-email/column";
import { Body } from "@react-email/body";

export default function Email() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000/static"; // TODO: replace with your own URL if not using Vercel

  const airLogo = `${baseUrl}/airbnb-logo.png`;
  const authorImage = `${baseUrl}/hosts.png`;
  const venueImage = `${baseUrl}/venue.png`;

  const venueName = "Martha's Vineyard";
  const eventTitle = `${venueName} - Wedding Celebration!`;

  const streetAddress = "123 Sesame Street";
  const addressLocality = "New York";
  const addressRegion = "NY";
  const postalCode = "10001";
  const addressCountry = "US";
  const fullAddress = `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}, ${addressCountry}`;

  const startDateYear = "2023";
  const startDateMonth = "05";
  const startDateDay = "27";
  const startDateHour = "17";
  const startDateMinute = "00";
  const startDate = `${startDateYear}-${startDateMonth}-${startDateDay}T${startDateHour}:${startDateMinute}:00`;
  const startDateReadable = new Date(startDate).toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    formatMatcher: "best fit",
  });

  const startDateShort = new Date(startDate).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const previewText = `Reservation reminder - ${startDateShort}`;

  const startingInfo = `
  We will start on ${startDateReadable}.`;
  const endingInfo = `
  Please have enough to drink by 1:00 AM and leave your keys & car at the venue.

  We will be providing a shuttle bus to nearby hotels at 1:30 AM.
  `;

  const hostNames = "Alice and Bob";

  const eventDescription = `
  Casual dinner followed by live music, DJ and dancing hosted by ${hostNames}.`;

  const RSVPButtonText = "RSVP";

  const RSVPEmail = "yourwedding@gmail.com";

  const hotelOptions = [
    {
      name: "The Ritz-Carlton New York, Battery Park",
      tagline: "Ask for the Smith Wedding room block",
      address: "Two West Street, New York, NY 10004",
      phone: "(212) 344-0800",
      website: "https://www.ritzcarlton.com/en/hotels/new-york/battery-park",
    },
  ];

  const faq = [
    {
      question: "What should I wear?",
      answer: "Casual attire is recommended.",
    },
    {
      question: "What time should I arrive?",
      answer: `The event will start at ${startDateReadable}.`,
    },
    {
      question: "Is it open bar?",
      answer: "Yes, there will be an open bar.",
    },
  ];

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <div itemscope itemtype="http://schema.org/EventReservation">
        <div
          itemprop="reservationFor"
          itemscope
          itemtype="http://schema.org/Event"
        >
          <meta itemprop="name" content={eventTitle} />
          <time itemprop="startDate" datetime={startDate} />
          <div itemprop="location" itemscope itemtype="http://schema.org/Place">
            <meta itemprop="name" content={venueName} />
            <div
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
            >
              <meta itemprop="streetAddress" content={streetAddress} />
              <meta itemprop="addressLocality" content={addressLocality} />
              <meta itemprop="addressRegion" content={addressRegion} />
              <meta itemprop="postalCode" content={postalCode} />
              <meta itemprop="addressCountry" content={addressCountry} />
            </div>
          </div>
        </div>
      </div>
      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Img
                src={`${baseUrl}/airbnb-logo.png`}
                width="96"
                height="30"
                alt="Airbnb"
              />
            </Section>

            <Section style={{ paddingBottom: "20px" }}>
              <Row>
                <Text style={heading}>Pack your bags!</Text>
                <Text style={subheading}>
                  It’s almost time for your trip to {addressLocality},{" "}
                  {addressRegion}.
                </Text>
                <Section>
                  <Img
                    src={venueImage}
                    width="680"
                    alt="Image of the venue"
                    style={venueImageStyle}
                  />
                </Section>
                <Text style={listingTitle}>{eventTitle}</Text>
                <Row>
                  <Column align="left">
                    <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                      {eventDescription}
                    </Text>
                  </Column>
                  <Column align="left">
                    <Img
                      src={authorImage}
                      width="72"
                      height="72"
                      style={userImage}
                    />
                  </Column>
                </Row>
                <Button
                  pY={19}
                  style={button}
                  href={`mailto:${RSVPEmail}?subject=RSVP}`}
                >
                  {RSVPButtonText}
                </Button>
                <Text style={{ ...listingTitle, paddingTop: "16px" }}>
                  Address
                </Text>
                <Section>
                  <Row>
                    <Column align="left">
                      <Text style={listTitle}>{venueName}</Text>
                      <Text style={{ ...paragraph, paddingBottom: "16px" }}>
                        {fullAddress}
                      </Text>
                    </Column>
                    <Column align="center"></Column>
                    <Column align="left">
                      <Link
                        style={{
                          textDecoration: "underline",
                          fontSize: "18px",
                          color: "#484848",
                        }}
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          fullAddress
                        )}`}
                      >
                        Get Directions
                      </Link>
                    </Column>
                  </Row>
                </Section>
                <Hr color="#dddddd" />

                <Text style={{ ...listingTitle, paddingTop: "16px" }}>
                  Check in
                </Text>
                <Text style={paragraph}>{startingInfo}</Text>
                <Text style={{ ...listingTitle, paddingTop: "16px" }}>
                  Check out
                </Text>
                <Text style={paragraph}>{endingInfo}</Text>
                <Hr color="#dddddd" />
                <Text style={listingTitle}>Hotels</Text>
                {hotelOptions.map((hotel) => {
                  return (
                    <>
                      <Text style={{ ...listTitle, paddingTop: "24px" }}>
                        {hotel.name}
                      </Text>
                      {hotel.tagline?.length > 0 && (
                        <Text style={paragraph}>{hotel.tagline}</Text>
                      )}
                      <Link style={link} href={`tel://${hotel.phone}`}>
                        Call {hotel.phone}
                      </Link>
                      <Link style={link} href={hotel.website}>
                        Book online
                      </Link>
                    </>
                  );
                })}
              </Row>

              <Hr style={hr} />

              <Section>
                <Text style={{ ...paragraph, fontWeight: "700" }}>
                  Common questions
                </Text>
                {faq.map((question) => {
                  return (
                    <>
                      <Link style={faqQuestion}>{question.question}</Link>
                      <Text style={paragraph}>{question.answer}</Text>
                    </>
                  );
                })}
                <Hr style={hr} />
                <Text style={footer}>{fullAddress}</Text>
                <Link
                  href="https://github.com/nchudleigh/airbnb-event-email"
                  style={reportLink}
                  target="_blank"
                >
                  Check out the source
                </Link>
              </Section>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 30px 48px",
  width: "580px",
  border: "1px solid #dddddd",
  borderRadius: "12px",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};
const venueImageStyle = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "10px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const listTitle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#484848",
};

const listingTitle = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
const subheading = {
  fontSize: "18px",
  lineHeight: "1",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#ff5a5f",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const faqQuestion = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
  paddingBottom: "1px",
};
const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
  textDecoration: "underline",
  paddingBottom: "1px",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
