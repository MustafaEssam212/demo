
import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import Tabs from "../../reusable/Tabs";
import EventCard from "../../reusable/EventCard";
import Button from "../../reusable/Button";

const DiscoverPopularEvent = () => {

    const getDataFromChild = (param) => {
        alert(param)
    }

    const getLikeDataFromCard = (param, id) => {
        console.log(param, id)
    }

    const cards = [
        {
            img: 'https://s3-alpha-sig.figma.com/img/67f0/7a7a/0d3475ab17ad0c9dd7e3b77c839460a9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kBV5v5GOpXXHsoymh-ht6WnuaB-DjUYC0yxlBmfcnwdEPeoIpqm1CVkDQCp6lEOLD5-vR7TkZn6RPL9DHA5vsy-p6louefuQ3NNae4MGkYUfZL3sv-GUk4k1oJbbp5h23dHCHxmAbMVpZDk7xSDTyVKejpjb1gq~PGH0NZAff4lRl1Zd0IH7MV5anZfYS-wZZY856HyAjK4XbDdVGUDcB9eFxoxMtjrcLJTk~yuEzMwCy7EfZNu3JJRlj9pE4SDdbxEdbcIhiB030l9Y5AbKu-Dh~NJWpBxxlXhgp3OxVxDidQTsItUCeiN7KOzFtlUm~iz5krqBUre~JqMdOvxZEw__',
            title: 'Movie Night',
            date: 'Aug 8, 2024',
            time: '12pm - 9pm',
            city: 'Toronto',
            id: '1',
            keywords: [
                'Vendor',
                'Kids Activities',
                'Exhibitors',
                'Sponsors',
                'Tickets',
            ]
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/df3c/9ce1/6456ebd23c361b83db8e7293d90593d9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s-JLu4jGjodQFRNAX744lIB1Bks6yxtxAxdPeTrO403vlUTQ32Ben4-Q5RAHI6SKAJ4sYqPt9mtwU-ubP1u-xEN4qSfUWlW23EY4jTSKeRx8D9yf9HXFYSrETLpKJ-NiaV5pka9neJb6U4Gj1qujOsceSZaUQrh9ULbhHw1FlJxvwxX2VyVHvb339epAo8ReFAfLs~yUYCaMQcCnB7zBAs563-rR08~F-2gfdHTHTtlICiSl4Xh3NBk5Il6Lhzem2P0f9seWyS6Pxv2gzl3Oz3apJWU7IMKTrfNcGMQNVlpWL-xzjM~xvhnWEqk7aG42XYH2-LAGf3el7t-Z6OZKpw__',
            title: 'Toronto Festival',
            date: 'Aug 8, 2024',
            time: '12pm - 9pm',
            city: 'Toronto',
            id: '2',
            keywords: [
                'Vendor',
                'Kids Activities',
                'Exhibitors',
                'Sponsors',
                'Tickets',
                'Marketplace',
            ]
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/5f62/75f6/2e5b514d4e3965fa344701f570878bbf?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=igYpgvUyeisK78AvdeANo4IRvUfqtuOk9WMJBCMYzv4sjKCed3XLwsFeRbj1w1zjyGoFH2FCG0Q5MnQNyZgzZgGtNkczfcb4hnSJoQa3CB7qT8fjyWxHuW54xiruLiqgg3WyJ1uEtLJLoKQUNquDj3RcPetID-G3b~d-KVHrRexfXh7ozfi3-J0sSJFO3XZvu7d~W2NbmJT~XqTMpCf5tnPSxntEEJ1zRy2EibzgoIosh8020K-FLzb-oDoYyEPDJHtG1RPgqMPf3bpfnBIdcDmlx~GZaJTGy2o25pMPMHacrb2qLg8QuqIT9qq3s0DKeywfZmPpaXQUu0Mf06X~kA__',
            title: 'Village of Summer',
            date: 'Aug 8, 2024',
            time: '12pm - 9pm',
            city: 'Toronto',
            id: '3',
            keywords: [
                'Vendor',
                'Sponsors',
                'Tickets',
                'Marketplace',
            ]
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/1507/41eb/be2767d82837a1071b33a0084aaf0d98?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ub3j9fEhoaedG6aomGs1OryZLJfkNpRNRz8n40xtDS5WXhA7szI-alPWhPARgLh8vapyIqXVs~k3G2C5gvdHeZ8oHz0-RpIMheg-IhoBC6TH3pE8WoHZDSrVagaLSPKvynecj9QZwZ0ZLLMPmwl3yjEsKVrdpaTFRxVlI3iH8j9N758YdBgsacL3afxdlq9UM3K5mmRcBUiKksBM81jUMEeqvXLbf56dBIhhm56hCgI~ZMb7zAw4qH-B8TXcXaJHO3jk6hUwk0ETrTWTk4JoTGYeiO3SGafl9qm5YhXGT2SSOlyqBuDYArg0RoUFkIDqMZZHMYVB7xbchU7dvzXM-A__',
            title: 'Night Market',
            date: 'Aug 8, 2024',
            time: '12pm - 9pm',
            city: 'Toronto',
            id: '4',
            keywords: [
                'Vendor',
                'Exhibitors',
                'Sponsors',
                'Tickets',
                'Marketplace',
            ]
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/49e8/a520/80264432ac38c9217a055fe54e5b4f37?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FdDrKl9gMARl6G-jD20pe0cx1cTadIxCnJ0b8ajxbH989SrjwHDojGvXhAiU9HdCwXfa~ppoQsPi6gzjEaTZHM6KqZYWHl~rS3BoleCNVDzrjGEBcQkcarNL1Z1u1IXYTZKD1us5lFAiW9JQ4o~ot9Ks2EpdXi0yE7sanRVZdN6q3xE~HQq7fdxa2Qcle-sM-6o0m7F3XtH-BxEP3HE-rjyxk2wWIVMG5PnF7l9nEr3ttV2KbIIjfDPCsiEt9p~8Fj~yFzo8XL6AwJ9kX2h9DdG9slYBmVFbY3-nBKp2b8H2XkOhCxmzhd2Q1hpFLJFzeK6AIUH1zDJt6MP0Og05Zg_',
            title: 'Springe festival',
            date: 'Aug 8, 2024',
            time: '12pm - 9pm',
            city: 'Toronto',
            id: '5',
            keywords: [
                'Vendor',
                'Kids Activities',
                'Exhibitors',
                'Sponsors',
                'Tickets',
                'Marketplace',
                'Vendor',
                'Kids Activities',
                'Exhibitors',
                'Sponsors',
                'Tickets',
                'Marketplace',
            ]
        },
        {
            img: 'https://s3-alpha-sig.figma.com/img/98d5/00ac/0eba2356ab9447bd5e6b61a9fe6c5583?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K53iAyGbkFRpG0Fr9T5mS5lkZckvs0vLj42z-WWaxjTV7G83f5BS8db19um1PSUHEu78MCG6nN2t6ttQq5aIJxMLsdo1noLVKkTiz-gOyrqkr2pMCEXsC3b8xag3U8M~7oPkRmpdRxPYA-nv3cBCUtqkqS~g85CxtnRbI2UJFEE6L3gKncSb~fBMY7j4HswBDum-LIhRGstC2NSpWUCkSV2bSODDL9z7n1byR3A~Tkgl9T15iLPAy5LpzNfPEgtTTcnXHx6WIysjfFnv2~-21q~50GJZPWlNiZQ-THxPH-nIiB9zgVsJCtlEKn026fsmw4Cm684OOJjwMdJiyug~qw__',
            title: 'Village of Summer',
            date: 'Aug 8, 2024',
            time: '12pm - 9pm',
            city: 'Toronto',
            id: '6',
            keywords: [
                'Vendor',
                'Kids Activities',
                'Exhibitors',
                'Sponsors',
                'Tickets',
                'Marketplace',
                'Vendor',
                'Kids Activities',
                'Exhibitors',
                'Sponsors',
                'Tickets',
                'Marketplace',
            ]
        }
    ]

    return(
        <div className="discover-popular-event-container">
            <ResponsiveTypography txt="Discover popular events" HTMLTag="h1" startFontSizeInPX={32} endFontSizeInPX={22} alignment="center" />

            <div className="discover-popular-event-tabs">
                <Tabs additionalClassNames="discover-popular-event-additional" width={67} tabs={['Exhibitor', 'Vendor', 'Tickets', 'Sponsor', 'Kids Activity', 'Marketplace']} active={0} sendDataToParent={getDataFromChild} />
            </div>

            <div className="events-cards-container">
                {
                    cards.map((e, key) => {
                        return <EventCard key={key} keywords={e.keywords} date={e.date} time={e.time} city={e.city} title={e.title} img={e.img} sendDataToParent={getLikeDataFromCard} price={50} id={e.id} />
                    })
                }
                
            </div>

            <div className="btn-container">
                <Button txt="show more" startFontSizeInPX={18} endFontSizeInPX={14} borderRadius={4} backgroundColor="var(--yellow-color)" txtColor="var(--second-black-text-color)" />
            </div>

        </div>
    )
}

export default DiscoverPopularEvent;