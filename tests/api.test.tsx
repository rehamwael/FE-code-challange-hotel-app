import HotelsService from "../src/services/HotelsService";

describe("all hotels data are back", () => {
    test("check if we have any hotel data on the list", async() => {
        const response = await HotelsService.getHotels();
        expect(response?.length).toBeGreaterThan(0);
    });
})
