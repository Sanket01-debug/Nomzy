import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render Restaurant Card Component witn Mock Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

    const name = screen.getByText("Chinese Wok")

    expect(name).toBeInTheDocument();
});