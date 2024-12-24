import { FaAngleDown, FaAngleUp, FaSliders, FaX } from "react-icons/fa6";
import { Button, Divider, Title } from "../../../shared";
import DoubleRangeSlider from "../range-slider/range-slider.component";
import ExpansionPanel from "../expansion-panel/expansion-panel.component";
import Tags from "../tags/tags.component";
import { SidenavProps } from "../../models/side-nav.type";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import {
  TransformArrayToCommaSeparatedString,
  TransformCommaSeparatedStringToStringArray,
} from "../../utils";

export default function Sidenav({
  toggle,
  setToggle,
  tags,
  minPrice,
  maxPrice,
  stepForPrice,
}: SidenavProps) {
  const [params, setParams] = useSearchParams();

  const selectedMinimumPrice = parseInt(params.get("minPrice") as string);
  const selectedMaximumPrice = parseInt(params.get("maxPrice") as string);
  const selectedMinimumRating = parseInt(params.get("minValue") as string);
  const selectedMaximumRating = parseInt(params.get("maxRating") as string);
  const selectedParamsTags = TransformCommaSeparatedStringToStringArray(
    params.get("tags") as string
  );
  const [priceRange, setPriceRange] = useState<{
    minPrice: number;
    maxPrice: number;
  }>({ minPrice, maxPrice });

  const [ratingRange, setRatingRange] = useState<{
    minRating: number;
    maxRating: number;
  }>({ minRating: 0, maxRating: 5 });

  const [selectedTags, setSelectedTags] = useState<string[]>(
    selectedParamsTags ? selectedParamsTags : []
  );

  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    setPriceRange({ minPrice, maxPrice });
  };

  const handleRatingRangeChange = (minRating: number, maxRating: number) => {
    setRatingRange({ minRating, maxRating });
  };

  const handleSelectedTagChanges = (selectedTags: string[]) => {
    setSelectedTags(selectedTags);
  };

  const handleFilter = () => {
    const updatedParams: URLSearchParams = params;
    updatedParams.set("minPrice", priceRange.minPrice.toString());
    updatedParams.set("maxPrice", priceRange.maxPrice.toString());
    updatedParams.set("minRating", ratingRange.minRating.toString());
    updatedParams.set("maxRating", ratingRange.maxRating.toString());
    if (selectedTags)
      updatedParams.set(
        "tags",
        TransformArrayToCommaSeparatedString(selectedTags)
      );
    setParams(updatedParams);
    setToggle(false);
  };

  return (
    <>
      <div
        className={` md:hidden ${
          toggle ? "w-[96%] mx-auto rounded-lg bg-gray-50 py-2 px-2" : "hidden"
        }`}
      >
        <div
          className={` block md:hidden ${
            toggle ? "block relative" : "hidden"
          } `}
        >
          <div className="flex justify-between  py-1">
            <Title font="font-bold" fontSize="text-xl">
              Filter
            </Title>
            <FaX
              className="text-gray-500 md:hidden"
              onClick={() => setToggle(false)}
            />
            <FaSliders className="hidden md:inline-block text-gray-500" />
          </div>
          <Divider width="w-full" />

          <ExpansionPanel
            panelName="Price"
            toggleIcon={<FaAngleUp />}
            nonToggleIcon={<FaAngleDown />}
          >
            <DoubleRangeSlider
              minValue={minPrice}
              maxValue={maxPrice}
              selectedMaximum={
                selectedMaximumPrice ? selectedMaximumPrice : maxPrice
              }
              selectedMinimum={
                selectedMinimumPrice ? selectedMinimumPrice : minPrice
              }
              step={stepForPrice}
              rightLabelExtraRight={10}
              onRangeChange={handlePriceRangeChange}
              // labelMinimumGap={15}
            />
          </ExpansionPanel>
          <Divider width="w-full" />
          <ExpansionPanel
            panelName="Rating"
            toggleIcon={<FaAngleUp />}
            nonToggleIcon={<FaAngleDown />}
          >
            <DoubleRangeSlider
              minValue={0}
              maxValue={5}
              selectedMaximum={
                selectedMaximumRating ? selectedMaximumRating : 5
              }
              selectedMinimum={
                selectedMinimumRating ? selectedMinimumRating : 0
              }
              step={1}
              rightLabelExtraRight={10}
              onRangeChange={handleRatingRangeChange}
              // labelMinimumGap={15}
            />
          </ExpansionPanel>
          <Divider width="w-full" />
          <ExpansionPanel
            panelName="Tags"
            toggleIcon={<FaAngleUp />}
            nonToggleIcon={<FaAngleDown />}
            childJustify="start"
          >
            <Tags
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              onSelectedTagChange={handleSelectedTagChanges}
              tags={tags}
            />
          </ExpansionPanel>
          <Divider width="w-full" />
          <Button
            width="w-full"
            extraClasses="bg-black text-white rounded-full"
            label="Apply Filters"
            onClick={handleFilter}
          />
        </div>
      </div>
      {/* for screen md or up */}
      <div className="hidden md:block w-[96%] mx-auto rounded-lg bg-gray-50 py-2 px-2">
        <div className="flex justify-between  py-1">
          <Title font="font-bold" fontSize="text-xl">
            Filter
          </Title>

          <FaSliders className=" text-gray-500" />
        </div>
        <Divider width="w-full" />

        <ExpansionPanel
          panelName="Price"
          toggleIcon={<FaAngleUp />}
          nonToggleIcon={<FaAngleDown />}
          childJustify="center"
        >
          <DoubleRangeSlider
            minValue={minPrice}
            maxValue={maxPrice}
            selectedMaximum={
              selectedMaximumPrice ? selectedMaximumPrice : maxPrice
            }
            selectedMinimum={
              selectedMinimumPrice ? selectedMinimumPrice : minPrice
            }
            step={stepForPrice}
            onRangeChange={handlePriceRangeChange}
            // rightLabelExtraRight={10}
            // labelMinimumGap={15}
          />
        </ExpansionPanel>
        <Divider width="w-full" />
        <ExpansionPanel
          panelName="Rating"
          toggleIcon={<FaAngleUp />}
          nonToggleIcon={<FaAngleDown />}
        >
          <DoubleRangeSlider
            minValue={0}
            maxValue={5}
            step={1}
            selectedMaximum={selectedMaximumRating ? selectedMaximumRating : 5}
            selectedMinimum={selectedMinimumRating ? selectedMinimumRating : 0}
            onRangeChange={handleRatingRangeChange}
            // rightLabelExtraRight={10}
            // labelMinimumGap={15}
          />
        </ExpansionPanel>
        <Divider width="w-full" />
        <ExpansionPanel
          panelName="Tags"
          toggleIcon={<FaAngleUp />}
          nonToggleIcon={<FaAngleDown />}
          childJustify="start"
        >
          <Tags
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            onSelectedTagChange={handleSelectedTagChanges}
            tags={tags}
          />
        </ExpansionPanel>
        <Divider width="w-full" />
        <Button
          width="w-full"
          extraClasses="bg-black text-white rounded-full"
          label="Apply Filters"
          onClick={handleFilter}
        />
      </div>
    </>
  );
}
