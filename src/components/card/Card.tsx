import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel'
import { ContextType, DataContext } from '../../../context/DataContext';

interface PropTypes {
    pictures: string[];
    name: string;
    passengersCapacity: number;
    sleepCapacity: number;
    toilet: boolean;
    shower: boolean;
    vehicleType: string;
    price: number;
    location: string;
    instantBookable: boolean;
}

const Container = styled.div`
    width: 392px;
    min-width: 392px;
    overflow: hidden;
    border-radius: 8px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 16px;
    @media (max-width: 400px) {
        width: 343px;
        min-width: 343px;
        margin-left: 0px;
        margin-right: 0px;
    }
`

const CardContent = styled.div`
    width: 100%;
    border: 1px solid #EDEAE3;
    padding: 12px 16px 17px 16px;
    border-radius: 0px 0px 8px 8px;
`

const VehicleType = styled.div`
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    color: #FF5E55;
    text-transform: uppercase;
`
const Name = styled.div`
    font-size: 24px;
    margin-top: 2px;
    font-weight: bold;
    line-height: 32px;
`
const NormalFont = styled.div`
    font-size: 14px;
    color: #1F2244;
    font-weight: 500;
`

export default function Card(props: PropTypes): JSX.Element {

    return (
        <Container>
            {
                props.pictures && props.pictures.length > 0 &&
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                    autoPlay={false}
                    emulateTouch={true}
                >
                    {
                        props.pictures.map((picture, index) => (
                            <div style={{ backgroundColor: '#EDEAE3' }}>
                                <img src={picture} style={{ width: '100%', height: '190px', objectFit: 'cover' }} key={index} />
                            </div>
                        ))
                    }
                </Carousel>
            }
            <CardContent>
                <VehicleType>
                    {
                        props.vehicleType
                    }
                </VehicleType>
                <Name>
                    {
                        props.name
                    }
                </Name>
                <hr style={{ marginBottom: '9px', marginTop: '5px' }}></hr>
                <NormalFont>
                    {
                        props.location
                    }
                </NormalFont>
                <div style={{ display: 'flex', marginBottom: '9px' }}>
                    <div style={{ display: 'flex', marginRight: '13px', alignItems: 'center' }}>
                        <svg style={{ marginRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Icon_Bed_Copy" data-name="Icon/Bed Copy" transform="translate(0 0)">
                                <path id="Combined_Shape" data-name="Combined Shape" d="M-.324,18.731a2.5,2.5,0,0,0-.032-2.516L-3.01,11.792A5.007,5.007,0,0,0-7.292,9.356a4.944,4.944,0,0,0-1.863.364l-2.128.851-.01,0L-12.76,7.637a2.508,2.508,0,0,0-2.088-1.395c-.051,0-.1,0-.156,0a2.494,2.494,0,0,0-2.091,1.128,2.5,2.5,0,0,0-.139,2.5l1.472,2.947a5,5,0,0,0,4.482,2.755,5.012,5.012,0,0,0,1.848-.353l2.134-.853,2.656,4.423A2.511,2.511,0,0,0-2.5,20,2.5,2.5,0,0,0-.324,18.731Zm-3.758-6.3,2.654,4.424a1.251,1.251,0,0,1,.016,1.258A1.247,1.247,0,0,1-2.5,18.75a1.257,1.257,0,0,1-1.073-.607l-2.656-4.426a1.259,1.259,0,0,0-1.072-.6,1.258,1.258,0,0,0-.463.089l-2.134.853a3.76,3.76,0,0,1-1.386.266,3.752,3.752,0,0,1-3.365-2.067L-16.118,9.3A1.251,1.251,0,0,1-16.05,8.05a1.246,1.246,0,0,1,1.043-.563l.08,0a1.256,1.256,0,0,1,1.047.7l1.473,2.949a1.255,1.255,0,0,0,1.12.681,1.287,1.287,0,0,0,.461-.086l2.137-.856a3.7,3.7,0,0,1,1.4-.272A3.753,3.753,0,0,1-4.082,12.434Zm-11.7-7.186a2.819,2.819,0,0,0,1.406-2.435A2.819,2.819,0,0,0-15.779.377l-.177-.095A2.828,2.828,0,0,0-17.185,0a2.818,2.818,0,0,0-1.407.377A2.819,2.819,0,0,0-20,2.813a2.819,2.819,0,0,0,1.407,2.435,2.812,2.812,0,0,0,1.406.377A2.816,2.816,0,0,0-15.779,5.248ZM-16.4,1.459a1.568,1.568,0,0,1,.781,1.354A1.568,1.568,0,0,1-16.4,4.166a1.563,1.563,0,0,1-.781.21,1.568,1.568,0,0,1-.781-.21,1.57,1.57,0,0,1-.781-1.354,1.57,1.57,0,0,1,.781-1.354,1.567,1.567,0,0,1,.781-.209A1.562,1.562,0,0,1-16.4,1.459Z" transform="translate(20 0)" fill="#9c8c8c" />
                            </g>
                        </svg>
                        <NormalFont>
                            {
                                props.passengersCapacity
                            }
                        </NormalFont>
                    </div>
                    <div style={{ display: 'flex', marginRight: '13px', alignItems: 'center' }}>
                        <svg style={{ marginRight: '4px' }} id="Icon_Bed" data-name="Icon/Bed" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <g id="Hotel_Double_Bed_1" data-name="Hotel Double Bed 1" transform="translate(0 2)">
                                <path id="Combined_Shape" data-name="Combined Shape" d="M18.757,15.718l-.007-.093V13.75H1.25v1.875a.625.625,0,0,1-1.243.093L0,15.625V9.167A2.3,2.3,0,0,1,1.875,6.913V1.875A1.876,1.876,0,0,1,3.6.005L3.75,0h12.5A1.876,1.876,0,0,1,18.12,1.729l.005.146V6.913A2.3,2.3,0,0,1,20,9.167v6.458a.625.625,0,0,1-1.243.093ZM1.25,9.167V12.5h17.5V9.167a1.039,1.039,0,0,0-.928-1.035l-.113-.006H2.291A1.042,1.042,0,0,0,1.25,9.167ZM16.875,6.875V5.625a.625.625,0,0,0-.533-.618L16.25,5h-5a.625.625,0,0,0-.618.532l-.006.093v1.25Zm-7.5,0V5.625a.625.625,0,0,0-.533-.618L8.75,5h-5a.625.625,0,0,0-.618.532l-.007.093v1.25ZM8.75,3.75A1.868,1.868,0,0,1,10,4.228a1.867,1.867,0,0,1,1.1-.472l.147-.005h5a1.871,1.871,0,0,1,.625.107V1.875a.626.626,0,0,0-.533-.618L16.25,1.25H3.75a.625.625,0,0,0-.618.533l-.007.092V3.857a1.868,1.868,0,0,1,.479-.1L3.75,3.75Z" transform="translate(0 -0.125)" fill="#9c8c8c" />
                            </g>
                        </svg>

                        <NormalFont>
                            {
                                props.sleepCapacity
                            }
                        </NormalFont>

                    </div>
                    <div>
                        {
                            props.toilet ? <svg style={{ marginRight: '13px' }} id="Icon_Bed_Copy_2" data-name="Icon/Bed Copy 2" xmlns="http://www.w3.org/2000/svg" width="20" height="20.004" viewBox="0 0 20 20.004">
                                <path id="Shape" d="M5,20a.62.62,0,0,1-.489-.237.627.627,0,0,1-.116-.533l.515-2.163A7.422,7.422,0,0,1,1.272,11.15a1.875,1.875,0,0,1,.6-3.65H11.25V1.875A1.879,1.879,0,0,1,13.125,0h2.5A1.879,1.879,0,0,1,17.5,1.875v7.5a1.869,1.869,0,0,1-1.3,1.784,3.129,3.129,0,0,1-2.076,2.428.613.613,0,0,0-.374.587v5.2a.626.626,0,0,1-.625.625H5Zm-2.467-8.75a6.231,6.231,0,0,0,3.379,4.943.625.625,0,0,1,.324.7l-.442,1.855H12.5V14.193a1.865,1.865,0,0,1,1.19-1.778l.036-.012a1.87,1.87,0,0,0,1.165-1.151H2.531Zm10.594-10a.625.625,0,0,0-.625.625V10h3.125a.626.626,0,0,0,.625-.625v-7.5a.626.626,0,0,0-.625-.625ZM1.875,8.75a.625.625,0,0,0,0,1.25H11.25V8.75Z" transform="translate(1.417 0.002)" fill="#9c8c8c" />
                            </svg>
                                : ''
                        }
                    </div>
                    <div>
                        {
                            props.shower ? <svg id="Icon_Bed_Copy_3" data-name="Icon/Bed Copy 3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                <path id="Combined_Shape" data-name="Combined Shape" d="M11.876,20a.622.622,0,0,1-.592-.427L10.659,17.7a.625.625,0,1,1,1.186-.4l.625,1.875a.622.622,0,0,1-.588.824ZM.118,19.742a.624.624,0,0,1-.085-.565L.658,17.3a.625.625,0,1,1,1.186.4L1.22,19.572A.623.623,0,0,1,.626,20H.621A.618.618,0,0,1,.118,19.742Zm15.509-.366V5.625a4.375,4.375,0,0,0-8.712-.571,4.4,4.4,0,0,1,3.712,4.321A.625.625,0,0,1,10,10H2.5a.625.625,0,0,1-.625-.625,4.389,4.389,0,0,1,3.78-4.331,5.625,5.625,0,0,1,11.22.58v13.75a.625.625,0,0,1-1.25,0ZM3.191,8.75H9.314a3.125,3.125,0,0,0-6.124,0ZM5.627,19.375V17.5a.625.625,0,0,1,1.25,0v1.876a.625.625,0,0,1-1.25,0Zm4.375-5a.622.622,0,0,1-.592-.428l-.625-1.875a.625.625,0,1,1,1.186-.4l.625,1.875a.622.622,0,0,1-.588.824Zm-7.5,0a.622.622,0,0,1-.593-.823l.625-1.875A.624.624,0,0,1,3.686,11.6a.617.617,0,0,1,.034.478L3.1,13.948a.624.624,0,0,1-.592.427Zm3.125-.625V11.875a.625.625,0,0,1,1.25,0V13.75a.625.625,0,0,1-1.25,0Z" transform="translate(1.727)" fill="#9c8c8c" />
                            </svg>
                                : ''
                        }
                    </div>
                </div>
                <hr></hr>
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    <div style={{ fontSize: '16px', lineHeight: '21px', color: '#9C8C8C' }}>
                        Cena od
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ fontSize: '16px', fontWeight: 'bold', color: 'black', marginRight: '8px' }}>
                            {
                                props.price + ' Kč/den'
                            }
                        </div>
                        {
                            props.instantBookable && <svg id="Icon_Action_Filter" data-name="Icon / Action / Filter" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <g id="light-mode-flash-on">
                                    <path id="Combined_Shape" data-name="Combined Shape" d="M0,8a8,8,0,1,1,8,8A8.009,8.009,0,0,1,0,8ZM1,8A7,7,0,1,0,8,1,7.008,7.008,0,0,0,1,8Zm5.129,5.836A.5.5,0,0,1,6,13.45L6.448,9H5.672a1,1,0,0,1-.958-1.288l1.2-4A1,1,0,0,1,6.872,3H10.19a1,1,0,0,1,.894,1.446L10.309,6H11.5a.5.5,0,0,1,.408.79l-5,7a.5.5,0,0,1-.778.045ZM6.87,4l-1.2,4H7a.5.5,0,0,1,.5.549l-.313,3.132L10.529,7H9.5a.5.5,0,0,1-.448-.724L10.191,4H6.871Z" fill="#ff5e55" />
                                </g>
                            </svg>
                        }
                    </div>
                </div>
            </CardContent>
        </Container>
    )
}