import { Box, Text, List, ListItem, Link } from '@chakra-ui/react';
import type { ListItemProps } from '@chakra-ui/react';

export const GuideListItem = (props: Omit<ListItemProps, 'fontSize'>) => {
  return (
    <ListItem
      {...props}
      fontSize="1.3rem"
      sx={{
        '& + &': {
          mt: '4px',
        },
        '&::marker': {
          fontSize: '1rem',
        },
      }}
    />
  );
};

const CreateGuide = () => {
  return (
    <Box p="28px 18px">
      <Text
        fontSize="1.6rem"
        fontWeight={700}
        lineHeight="2rem"
        wordBreak="keep-all"
      >
        마이데스크는 당신이 하루에 오래 일하는 책상의 이야기를 하는 목적으로
        시작한 서비스입니다.
        <br />
        전자기기 뿐만 아니라 책상에서 꼭 필요한 아이템이 있다면 추천
        부탁드립니다.
      </Text>

      <Text mt="12px" fontWeight={700}>
        <Text as="span" color="#FF0000">
          *
        </Text>
        작성하기 전 아래 내용을 꼭 읽어주세요.
      </Text>

      <List mt="4px" lineHeight="1.8rem" listStyleType="disc" pl="18px">
        <GuideListItem>
          작성된 이야기가 조건에 부합할 경우 반려될 수 있습니다.
          <br />
          (광고성, 악성 게시물 등을 위한 과정이오니 양해바랍니다.)
        </GuideListItem>
        <GuideListItem>
          게시 및 반려 여부는 접수 후 7~10일 가량 소요 됩니다.
        </GuideListItem>
        <GuideListItem>
          간단한 자기소개 및 책상이야기를 들려주세요.
        </GuideListItem>
        <GuideListItem>
          사진 속 제품 정보는 본문에 최대한 적어주세요.
        </GuideListItem>
        <GuideListItem>
          사진은 장당 최대 10MB 까지 업로드 가능합니다.
        </GuideListItem>
        <GuideListItem>
          커버사진과 제목은 에디터에 의해 변경될 수 있습니다.
        </GuideListItem>
        <GuideListItem>
          글 작성과 이미지 업로드 시, 타인의 지식재산권을 침해하지 않도록 유의해
          주세요.
        </GuideListItem>
      </List>

      <Box mt="12px" fontSize="1.4rem" lineHeight="2rem">
        <Text as="span">✅ 작성하기 어려우신가요?</Text>
        <Link
          href="https://0gam.notion.site/0gam/SAMPLE-117f9be5f8f5458d9136d8f7396a899e"
          target="_blank"
          display={{ base: 'block', sm: 'inline' }}
          ml={{ base: 0, sm: '4px' }}
          color="orange.500"
          textDecoration="underline"
          fontWeight="700"
        >
          (샘플가이드 보기)
        </Link>
      </Box>
    </Box>
  );
};

export default CreateGuide;
